Problems:

1. Wrong err message (Bad Request) insttead of email or password validation err
2. Required dubble click when loging in
3.


app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json('Review ID not found');
  }
}); 
