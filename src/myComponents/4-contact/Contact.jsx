import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactmeAnimation from "/public/animations/Animation - 1702224495210";
import contactman from "/public/animations/Animation - 1702225351477";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgwnyyb");

  if (state.succeeded) {
    return (
      <p style={{ color: "var(--hover)" }}>
        💙💛Thank you for contacting me and I will respond to you as soon as
        possible
        <br />{" "}
        <img
          style={{ width: "6%" }}
          src="/animations/done.gif"
          alt="done photo"
        />{" "}
        Done💚
      </p>
    );
  }

  return (
    <>
      <div className="contact" id="contact">
        <div className="icon">
          <img
            style={{ width: "80px" }}
            src="/animations/Animation - 1702224495210.gif"
          />
          <h1>
            <span>C</span>ontact <span>Me</span>
          </h1>
          <img
            style={{ width: "50px" }}
            src="/animations/pepole.gif"
            alt="photo"
          />
        </div>
        <p>
          Contact me for information and get notification when i published
          something new 💌
        </p>
      </div>

      <div className="flex contact">
        <Lottie
          style={{ width: "300px" }}
          className="contactman"
          animationData={contactman}
        />
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Adress :</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message: </label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "submit"}
          </button>
        </form>
        <div className="rigth-sec ">
          <Lottie className="contactme" animationData={contactmeAnimation} />
        </div>
      </div>
    </>
  );
};

export default Contact;
