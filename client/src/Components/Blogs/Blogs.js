import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row my-5 gy-5">
          <div className="col-md-10 mx-auto">
            <h3>
              <p className="text-center mb-5">
                <h2>
                  <strong>Question Answers</strong>
                </h2>
              </p>
              <section className="mb-4">
                <hr />
              </section>
              <strong>1. How will you improve the performance of a React Application?</strong>
            </h3>
            <section>
              <ul>
                <li>i. Remove all Inline Functions</li>
                <li>ii. Avoid modifying the state if there is no change in state from Redux store</li>
                <li>iii. Conditional rendering of the components</li>
                <li>iv. Remove unnecessary awaits and use Promise.all() wherever applicable</li>
                <li>v. Frequent Mounting/Unmounting</li>
              </ul>
            </section>
          </div>
          <div className="col-md-10 mx-auto">
            <h3>
              <strong>2. How does prototypical inheritance work?</strong>
            </h3>
            <section>
              In JavaScript, objects have a special hidden property [[Prototype]] (as named in the
              specification), that is either null or references another object. That object is called “a
              prototype”. <br />
              When we read a property from object, and it’s missing, JavaScript automatically takes it from
              the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study
              many examples of such inheritance, as well as cooler language features built upon it. The
              property [[Prototype]] is internal and hidden, but there are many ways to set it. One of them is
              to use the special name __proto__, like this
            </section>
            <section>In this programming paradigm, a class is a blueprint for creating objects.</section>
          </div>

          <div className="col-md-10 mx-auto">
            <h3>
              <strong>3. What is a unit test? Why should write unit tests?</strong>
            </h3>
            <section>
              UNIT TESTING is a type of software testing where individual units or components of a software
              are tested. The purpose is to validate that each unit of the software code performs as expected.
              Unit Testing is done during the development (coding phase) of an application by the developers.
              Unit Tests isolate a section of code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object.
            </section>
            <section>
              Unit Testing is important because software developers sometimes try saving time doing minimal
              unit testing and this is myth because inappropriate unit testing leads to high cost Defect
              fixing during System Testing, Integration Testing and even Beta Testing after application is
              built. If proper unit testing is done in early development, then it saves time and money in the
              end.
            </section>
          </div>
          <div className="col-md-10 mx-auto">
            <h3>
              <strong>4. What are the different ways to manage a state in a React application?</strong>
            </h3>
            <section>
              There are four main types of state you need to properly manage in your React apps:
            </section>
            <section>Local (UI) state – Local state is data we manage in one or another component.</section>
            <section>Global (UI) state – Global state is data we manage across multiple components. </section>
            <section>
              Server state – Data that comes from an external server that must be integrated with our UI
              state.{" "}
            </section>
            <section>
              URL state – Data that exists on our URLs, including the pathname and query parameters.{" "}
            </section>
          </div>

          <div className="col-md-10 mx-auto">
            <h3>
              <strong>
                5. You have an array of products. Each product has a name, price, description, etc. How will
                you implement a search to find products by name?
              </strong>
            </h3>
            <section>
              In ES6 we can use Array.prototype.find(predicate, thisArg?) like so: i will use array.find
              method to find product by its name
              <br />
              let obj = array.find(product = &#62;product.name === 'name')
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
