import './Overview.css';
import React, { Component }  from 'react';

function Overview(){
    return (
        <div className="content">
          <h3>What is pi calculus?</h3>
          The π-calculus belongs to the family of process calculi, mathematical formalisms for describing and analyzing properties of concurrent computation. In theoretical computer science, the π-calculus (or pi-calculus) is a process calculus. The π-calculus allows channel names to be communicated along the channels themselves, and in this way it is able to describe concurrent computations whose network configuration may change during the computation.

          {'\n'}

          <h3>What are session types?</h3>
          In type theory, session types are used to ensure correctness in concurrent programs. They guarantee that messages sent and received between concurrent programs are in the expected order and of the expected type.[1][2] Session type systems have been adapted for both channel and actor systems.[3]

Session types are used to ensure desirable properties in concurrent and distributed systems, i.e. absence of communication errors or deadlocks, and protocol conformance.
        </div>
    );
}

export default Overview;