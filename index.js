const ratingButtons = document.querySelectorAll('#ratingNumbers a');
const submitButton = document.getElementById('submitButton');
const ratingState = document.getElementById('ratingState');
const thankyouState = document.getElementById('thankyouState');
const selectedRatingText = document.getElementById('selectedRatingText');

let selectedRating = null;

ratingButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    selectedRating = btn.textContent;
    ratingButtons.forEach(b => b.classList.remove('active-rating'));
    btn.classList.add('active-rating');
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating) {
    ratingState.classList.add('d-none');
    thankyouState.classList.remove('d-none');
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
