const About = () => {
  return (
    <>
    <div className="About-page"> 

      <h1 className="about-one">About React js!</h1>
      <p className="about-two">
        React.js is an open-source JavaScript library designed for building
        fast, efficient, and dynamic user interfaces. It is especially powerful
        for creating single-page applications (SPAs), where content dynamically
        updates without requiring a full-page reload. This dynamic behavior
        significantly improves user experience by reducing load times and
        ensuring smooth interactions. React’s architecture is centered around
        components, which are self-contained, reusable building blocks that
        define the structure and behavior of the UI. Components make the
        application modular and maintainable, as each part of the UI can be
        independently developed, tested, and reused across the project. React’s
        ability to efficiently handle updates through its virtual DOM ensures
        high performance, even in applications with complex and frequently
        changing data. This makes it a preferred choice for developers aiming to
        build modern, interactive web applications.
      </p>

      <h1 className="about-three">Key Concepts:</h1>
      <p className="about-four">
        <b>1. useState:</b> useState is a React Hook used for managing state in
        functional components. It allows you to add state to a component without
        converting it to a class.
        <br />
        <b>2. Props: </b>Props (short for properties) are used to pass data from
        a parent component to a child component. Props are read-only and cannot
        be modified by the child.
        <br />
        <b>3. useEffect: </b>useEffect is a React Hook used to perform side
        effects, such as fetching data, directly interacting with the DOM, or
        setting up subscriptions. It runs after the component renders and can
        depend on specific variables.
      </p>
    </div>
    </>
  );
};
export default About;
