import React, {useState, useEffect} from 'react';
import globeVar from '../../GlobeApi';
import axios from 'axios';
import parse from "html-react-parser";
const FAQ = () => {
    const [faqs, setFaqs] = useState([])
    const faq_que = () => {

        //api call of image slider
        axios.get( globeVar+"faq").then((response)=>{
             if(response.data.success === 1)
        {

            console.log(response.data.data); 
            setFaqs(response.data.data); 
               }      
        })
       };
       useEffect(() => {
        faq_que();
       }, [])
  return (
    <div><section className="breadcrumb-box">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-sm-auto">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
        </div>
    </div>
</section>

<section className="faq-bg">
    <div className="container section-padding">

        <div className="row justify-content-center">

            <div className="col-12 col-md-12 col-lg-10 col-xl-8">
              

                <div className="accordion custom-accordion" id="accordionExample">
                    {faqs.map(rec => { 
                    return <div className="card" key={rec.id}>
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target={"#collapseOne"+rec.id} aria-expanded="true" aria-controls="collapseOne">
                                {rec.title}
                                </button>
                            </h2>
                        </div>

                        <div id={"collapseOne"+rec.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                {parse(rec.content)}
                            </div>
                        </div>
                    </div> 
                })}
                    {/* <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Where does it come from?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Why do we use it?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Where can I get some?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    </div>
</section>
</div>
  )
}

export default FAQ;