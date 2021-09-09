import PropTypes from 'prop-types'
import forumSinglecss from '../../styles/forumSingle.module.css'
import Tombol from '../Tombol'

const CommentThreadItem = ({
  threadId,
  comment: { id, text, name, avatar, date },
}) => {
  return (
    <div className={forumSinglecss.commentThreadItem}>
      <div className={forumSinglecss.headerComment}>
        <img
          src='/images/sample/avatar.svg'
          alt='username'
          width='30'
          height='30'
        />{' '}
        <span style={{ fontWeight: '500' }}>UserName</span>
      </div>
      <blockquote>
        this is user : <br />
        This is the blockqoute for the post
      </blockquote>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <Tombol
        variant='warning'
        color='#F4B740'
        border='1px solid #F4B740'
        backgroundColor='#1a1a1a'
        fontWeight='500'
        size='sm'
      >
        Balas
      </Tombol>
    </div>
  )
}

CommentThreadItem.propTypes = {
  threadId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
}

export default CommentThreadItem
