import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components'; 
import '../../css/faq-css.css';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
//   margin-bottom: 40px;

//   width: 80%;
//   margin: auto
  

// `;

// const Container = styled.div`
//   position: absolute;
//   top: 10%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
//   text-align: left;
// `;

// const Wrap = styled.div`
//   background: #fff;
//   color: #000000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   text-align: center;
//   cursor: pointer;
//   transition: 1s ease-out;
//   h1 {
//     padding: 2rem;
//     font-size: 2rem;
//     text-align:left;
//   }
//   span {
//     margin-right: 1.5rem;
//   }
// `;

// const Dropdown = styled.div`
//   background: #fff;
//   color: #3aafa9;
//   width: 100%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #00ffb9;
//   border-top: 1px solid #00ffb9;
  
//   p {
//     font-size: 2rem;
//   }
// `;

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (

    <>
      <h2 className="faq-title"> Frequently Asked Questions </h2>

      <div className="accordion">
        <div className="accordion-item">
        {Data.map((item, index) => {
            return (
              <>
                <div className="accordion-question" onClick={() => toggle(index)} key={index}>
                  {item.question}
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="accordion-answer">
                    {item.answer}
                  </div>
                ) : null}
              </>
            );
          })}

        </div>
      </div>
    </>

    
    // <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
    //   <h2 style={{ textAlign: 'center', color: '#3aafa9', margin: '30px auto 0 auto' }}>Frequently Asked Questions</h2>
    //   <AccordionSection>
    //     <Container>
    //       {Data.map((item, index) => {
    //         return (
    //           <>
    //             <Wrap onClick={() => toggle(index)} key={index}>
    //               <h1>{item.question}</h1>
    //               <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
    //             </Wrap>
    //             {clicked === index ? (
    //               <Dropdown>
    //                 <p>{item.answer}</p>
    //               </Dropdown>
    //             ) : null}
    //           </>
    //         );
    //       })}
    //     </Container>
    //   </AccordionSection>
    // </IconContext.Provider>
  
  );
};

export default FAQ;
