import React from 'react';
// import './Archive.css';
import '../shared.css';


const archive = () => (

    <section className="main_container">
        <div className="inner">

            <div className="archive_container">

                <table className="archive_table">
                    <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Output Format</th>
                        <th>No. Of Pages</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ورق المراجعة</td>
                        <td>PDF</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>يوتوبيا</td>
                        <td>PDF</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>To Do List (Monday)</td>
                        <td>Excel</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>فكرة المشروع</td>
                        <td>text</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>جداول امتحانات الفاينال</td>
                        <td>JPG</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>درجات اعمال السنة</td>
                        <td>word</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Presentation Paragraph</td>
                        <td>text</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Sheet DR. Reem</td>
                        <td>word</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>المطلوب في الريبورت</td>
                        <td>JPG</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>اسامي التيم</td>
                        <td>PDF</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

export default archive;