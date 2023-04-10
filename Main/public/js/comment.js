const newFormHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('#comment-text').value.trim();

  if (commentText) {
    const postId = document.querySelector('#post-id').value.trim();

    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: commentText, post_id: postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log(commentText);
      console.log(postId);
      alert('Failed to add comment');
    }
  }
};

document.querySelector('.form').addEventListener('submit', newFormHandler);
