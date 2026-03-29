import React from "react";

function Details() {
  const phoneNumber = "919999999999"; // replace with your number

  const message = encodeURIComponent(
    "Hello! I will attend your wedding 💍❤️"
  );

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };
  const addToCalendar = () => {
  const start = "20301125T100000";
  const end = "20301125T130000";

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Thendral%20Weds%20Madhesh&dates=${start}/${end}&details=Wedding%20Invitation&location=Vaniyambadi`;

  window.open(url, "_blank");
};

  return (
    <div className="section">
      <div className="card fade-in">
        <h2>💍 Wedding Details</h2>

        <p>Date: NOVEMBER 25, 2030</p>
        <p>Time: 10:00 AM</p>
        <p>Venue: Vaniyambadi</p>


        <button className="btn" onClick={openWhatsApp}>
          📱 RSVP on WhatsApp
        </button>
        <button className="btn" onClick={addToCalendar}>
  📅 Add to Calendar
</button>
        
      </div>
    </div>
  );
}

export default Details;