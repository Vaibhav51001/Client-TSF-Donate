import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Swal from "sweetalert2";
require("dotenv").config();

function Content() {
  async function displayRazorpay() {
    const result = await axios.post(
      "https://server-tsf-donate.herokuapp.com/generateorder/order"
    );
    console.log(result.data);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.RAZOR_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "TSF Fundraiser",
      description: "Donate For Poor And Needy.",
      image: "https://internship.thesparksfoundation.info/assests/img/logo.png",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios
          .post("https://server-tsf-donate.herokuapp.com/paymentsuccess/success", data)
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: `<strong>Thanks For Your Help!!</strong>`,
              icon: 'success',
              showCloseButton: true,
            })
          })
          .catch(
            (err)=>Swal.fire({
            title: `<strong>${err.message}</strong>`,
            icon: 'error',
            showCloseButton: true,
          }));


        // alert(result.data.msg);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "TSF Corporate Office",
      },
      theme: {
        color: "#f19427",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Card image"
          style={{ height: "700px" }}
        />
        <Card.ImgOverlay
          className="container"
          style={{
            marginTop: "200px",
            padding: "2rem",
            textAlign: "center",
            color: "yellow",
            fontSize: "1.5rem",
          }}
        >
          <Card.Text>
            Every child, no matter who they are or where they come from,
            deserves access to education.
          </Card.Text>
          <Card.Title>
            Come, join our mission to Educate Every Last Child!
          </Card.Title>
          <Card.Text>
            Over the years, we have faced a multitude of issues but undeterred,
            we have devised several solutions that help us continue sharing the
            gift of education with underprivileged children.
          </Card.Text>
          <Button variant="danger" size="lg" onClick={displayRazorpay}>
            Donate Now
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Content;
