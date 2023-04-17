import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import PostImage from './PostImage';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

import { 
  RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone 
} from '@ant-design/icons'
import { Avatar, Button, Card, Comment, List, Popover, } from 'antd';
import { REMOVE_POST_REQUEST } from '../reducers/post';


const PostCard = ({ post}) => {

  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  // const { me } = useSelector((state) => state.user);
  // Optinal Chaining 연산자
  // const id = me?.id;
  // 위 2줄 1줄로 처리 가능
  const id = useSelector((state) => state.user.me?.id);

  // 좋아요
  const onToggleLike = useCallback(
    () => {
      setLiked((prev) => !prev);
    }, []
  );
  // 댓글보기
  const onToggleComment = useCallback(
    () => {
      setCommentFormOpened((prev) => !prev);
    }, []
  );
  // 삭제
  const onRemovePost = useCallback(
    () => {
      dispatch({
        type: REMOVE_POST_REQUEST,
        data: post.id,
      });
    }, []
  );

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImage images={post.Images} /> }
        // cover={post.Images[0]}
        actions={[
          <RetweetOutlined key="retweet"/>,
          liked 
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </>
                )
                : <Button>신고</Button>
              }
            </Button.Group>
          )}>
          <EllipsisOutlined/>
          </Popover>
        ]}
      >
        <Card.Meta 
          avatar = {<Avatar>{post.User.nickName[0]}</Avatar>}
          title = {post.User.nickName}
          description = {<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post}/>
          <List 
            header = {`${post.Comments.length}개의 댓글`}
            itemLayout = "horizontal"
            dataSource = {post.Comments}
            renderItem = { (item) => (
              <li>
                <Comment
                  author = {item.User.nickName}
                  avatar = {<Avatar>{item.User.nickName[0]}</Avatar>}
                  content = {item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  )
};

PostCard.propTypes = {
  post : PropTypes.shape({
    id : PropTypes.number,
    User : PropTypes.object,
    content : PropTypes.string,
    createAt : PropTypes.object,
    Comments : PropTypes.arrayOf(PropTypes.object),
    Images : PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;