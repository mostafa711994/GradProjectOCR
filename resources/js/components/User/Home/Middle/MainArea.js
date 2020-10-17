import React from 'react';
import Image1 from '../../../images/What Is OCR.jpg';
import Image2 from '../../../images/Free Online OCR.jpg';
import Image3 from '../../../images/Desktop Solution.jpg';
import Image4 from '../../../images/Features.jpg';

const mainArea  = () =>(
    <section id="three" className="wrapper align-center">
        <div className="inner">
            <div className="flex flex-2">


                <article>
                    <div className="image round">
                        <img src={Image1} alt="what_is_ocr"/>
                    </div>
                    <header>
                        <h3>What is OCR?</h3>
                    </header>
                    <p>OCR (Optical Character Recognition) is a technology that extracts the text from an image or a
                        scanned document so that it can be edited, formatted, searched, indexed, automatically
                        translated or converted to speech. OCR can be used
                        to convert books, invoices and other documents into electronic format and to automate various
                        business processes. It's time to stop retyping. Just scan and OCR</p>
                </article>


                <article>
                    <div className="image round">
                        <img src={Image2} alt="online_ocr"/>
                    </div>
                    <header>
                        <h3>Free Online OCR</h3>
                    </header>
                    <p>Convert scanned images into editable text. Free Online OCR is a free service that allows you to
                        easily convert scanned documents, PDFs, scanned invoices, screenshots and photos into editable
                        and searchable text, such as DOC, TXT or
                        PDF. The service is completely free and you don't need to register or install anything on your
                        computer. Just select an image file and click Convert. You can immediately download the
                        resulting document</p>
                </article>


                <article>
                    <div className="image round">
                        <img src={Image3} alt="desktop_ocr"/>
                    </div>
                    <header>
                        <h3>Desktop OCR Solution</h3>
                    </header>
                    <div className="home_features_lists">
                        <ul>
                            <li>♦ Integrated text editor</li>
                            <li>♦ Built-in spell-checker</li>
                            <li>♦ Scanner support</li>
                            <li>♦ User dictionaries</li>
                            <li>♦ Manual selection of text regions</li>
                        </ul>
                    </div>
                </article>


                <article>
                    <div className="image round">
                        <img src={Image4} alt="features"/>
                    </div>
                    <header>
                        <h3>Features</h3>
                    </header>
                    <div className="home_features_lists">
                        <ul>
                            <li>♦ Precise image to text conversion</li>
                            <li>♦ Keeps the layout and formatting</li>
                            <li>♦ Supports DOC, PDF or TXT as output</li>
                            <li>♦ Automatically rotates pages</li>
                            <li>♦ Works online - no installation</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </section>

);

export default mainArea;