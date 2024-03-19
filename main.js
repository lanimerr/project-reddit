$(document).ready(function() {
  // Function to handle form submission
  $('#postForm').submit(function(event) {
    event.preventDefault();

    // Get input values from the form
    let post = $('#post').val();
    let name = $('#name').val();

    // Create and display the new post
    createPost(post, name);

    // Reset the form
    $('#postForm')[0].reset();
  });

  // Function to create a new post HTML structure
  function createPost(comment, by) {
    let newPost = `
      <div class="new-posts">
        <div class="actual-post">
          <div>
            <div class="row-10 post">
              <p class="message"><strong>Comment: </strong>${comment}</p>
            </div>
            <div class="row-10 author">
              <p class="posted"><strong>Posted By: </strong>${by}</p>
            </div>
            <button class="upvote-button btn btn-success">Upvote</button>
            <span class="upvotes-count"><strong> : </strong>0</span>
            <button class="delete-button btn btn-danger">Delete</button>
            <button class="hide-button btn btn-secondary">Hide</button>
          </div>
        </div>
      </div>
    `;

    // Append the new post to the post container
    $('.post-container').append(newPost);
  }

  // Function to handle the delete button 
  $(document).on('click', '.delete-button', function () {
    $(this).closest('.new-posts').remove();
  });

  // Function to handle the hide button 
  $(document).on('click', '.hide-button', function () {
    $(this).closest('.new-posts').hide();
  });

  // Function to handle the upvote
  $(document).on('click', '.upvote-button', function () {
    let post = $(this).closest('.new-posts');
    let upvoteCount = parseInt(post.find('.upvotes-count').text().split(':')[1].trim()) || 0;
    upvoteCount++;
    post.find('.upvotes-count').html(`<strong> : </strong>${upvoteCount}`);
  });
});
