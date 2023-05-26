function generateMeme(event) {
    event.preventDefault();
  
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const imageUrl = document.getElementById('image-url').value;
  
    document.getElementById('top-text').value = '';
    document.getElementById('bottom-text').value = '';
    document.getElementById('image-url').value = '';

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme');

    const memeImage = new Image();
    memeImage.src = imageUrl;
    memeImage.addEventListener('load', function() {

      const topTextElement = document.createElement('div');
      topTextElement.classList.add('top-text');
      topTextElement.textContent = topText;
  
      const bottomTextElement = document.createElement('div');
      bottomTextElement.classList.add('bottom-text');
      bottomTextElement.textContent = bottomText;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', function () {
        memeContainer.remove();
      });
  
      memeContainer.appendChild(memeImage);
      memeContainer.appendChild(topTextElement);
      memeContainer.appendChild(bottomTextElement);
      memeContainer.appendChild(deleteButton);
  
      document.getElementById('meme-container').appendChild(memeContainer);
    });
  
  }
  
  document.getElementById('meme-form').addEventListener('submit', generateMeme);
  