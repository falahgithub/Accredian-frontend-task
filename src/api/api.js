export const handleSubmit = async (event) => {

  event.preventDefault();

  const referrer = event.target.referrer.value;
  const referee = event.target.referee.value;
  const email = event.target.email.value;
  console.log(referrer)

  try {
    const response = await fetch('http://localhost:5000/api/referrals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ referrer, referee, email }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // const data = await response.json();
    alert('Referral submitted successfully!');
  } catch (error) {
    console.error('Failed to fetch', error);
    alert(`Error: ${error.message}`);
  }
};