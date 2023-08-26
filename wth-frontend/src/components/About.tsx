function About() {
  return (
    <>
      <Heading />
      <Message />
    </>
  );
}

function Heading() {
  return <h1>Our Mission.</h1>;
}

function Message() {
  return (
    <div>
      At UniCents, our mission is clear: we're here to bridge the gap between
      students and their goals. We're committed to making higher education more
      accessible, affordable, and rewarding for every student. Whether you're a
      freshman just starting out or a senior about to embark on the next chapter
      of your life, we've got your back.
    </div>
  );
}

export default About;
