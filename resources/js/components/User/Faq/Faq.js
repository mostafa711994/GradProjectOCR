import React from 'react';
// import './Faq.css';
import '../shared.css';

import Image from '../../images/00.png'

const faq = () => (
    <section id="faq" className="main_container">
        <div className="inner">

            <div className="limiter">
                <div className="title1">
                    <span>Free Online OCR - FAQ</span>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">

                        <div className="fqa">

                            <ul className="q-a">
                                <li className="q">What files can I upload?</li>
                                <div className="a">You can upload any files containing text image. Graphic file format
                                    can be any one from the listed below: TIF/TIFF (multipage TIFF), JPEG/JPG, BMP, PCX,
                                    PNG, GIF, PDF (multipage PDF) The only restriction: file size should
                                    not exceed 15 Mb in free guest mode and 200 mb for registered users. Image
                                    resolution should be 200 DPI or higher to ensure good recognition results.
                                </div>

                                <li className="q">How do I submit more then one image at once?</li>
                                <div className="a">You can upload more than one file at once by placing the files in a
                                    ZIP archive (available only for registered user).
                                </div>

                                <li className="q">I have an image of 212 Mb and cannot upload it to your service. How
                                    can I recognize the text?
                                </li>
                                <div className="a">If you need to recognize a larger size image (over 200 Mb), please,
                                    address the service support
                                </div>

                                <li className="q">What happens with uploaded file?</li>
                                <div className="a">All documents recognized under the "Guest" account are deleted
                                    automatically after ending process. For registered users source documents and
                                    converted files are stored into user`s document list one month
                                </div>

                                <li className="q">How do I view/receive result?</li>
                                <div className="a">After the text is successfully recognized, links to the newly created
                                    output files appear in the user's documents. You can either open the file for
                                    viewing or download it to your PC
                                </div>

                                <li className="q">I want to recognize only 2 pages from 50-pages PDF file, is it
                                    possible?
                                </li>
                                <div className="a">Yes, it is possible. In recognition options set "Multipage document"
                                    flag, and in the field for a range of pages specify necessary pages separated by
                                    comma (or range of pages with a hyphen). For example, "14,26", only 14th
                                    and 26th page will be recognized. Or "4,9-12", 4th, 9th, 10th, 11th and 12th pages
                                    will be recognized.
                                </div>

                                <li className="q">I have lost the source image. Can I download it again?</li>
                                <div className="a">Yes, if you are a registered user, you can download the source image
                                    in your workspace
                                </div>

                                <li className="q">How long will it take to recognize my image?</li>
                                <div className="a">The text recognition time depends on a lot of factors. First of all,
                                    it is the image quality. The average time of recognizing one file is several
                                    seconds. The second significant factor is the current service workload. If
                                    recognition requests come from different users at the same time, there is a waiting
                                    list.
                                </div>
                                <li className="q">I can't find my question here!</li>
                                <span className="more">For any other questions</span>
                                <a className="cont" href="Contact us.html">Contact Us</a>
                            </ul>
                        </div>
                    </div>
                    <div className="image_container">
                        <img src={Image} className="faq_photo" alt="eed"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default faq;