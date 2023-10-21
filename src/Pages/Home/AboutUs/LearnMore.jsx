import React from 'react';
import { Helmet } from 'react-helmet-async';
import gif1 from '../../../assets/2ROr.gif'
import gif2 from '../../../assets/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a7675645f79733541566b786e513d3d2d3732303532373938332e31353936323238376634.gif'
import { Link } from 'react-router-dom';

const LearnMore = () => {
    return (
        <div>
            <Helmet> <title>Foodie | Learn More</title> </Helmet>

            <div className='md:border-b-4  text-center py-10 bg-gray-300 mb-20'>


                <center className='md:flex md:gap-5 md:justify-around'>
                    <img className='w-20  ' src={gif1} alt="" />
                    <div>
                    <p className='md:text-4xl font-bold'> Learn More </p>
                    <p className='mt-3 text-gray-600'>We start Journy, 1997</p>
                    </div>
                    <img className='w-40' src={gif2} alt="" />
                </center>

            </div>

            <div className=' border-4 md:p-10 p-2 rounded-2xl md:mx-20 mx-5'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio itaque exercitationem dolor qui doloribus laborum nulla veritatis quo nesciunt pariatur molestias excepturi vitae eum ratione, enim eos. Cupiditate pariatur, explicabo dignissimos accusantium ducimus consequatur quasi nam dolorum deleniti voluptatum, accusamus impedit voluptatem minima, aut nemo. Aperiam minima voluptate qui quidem voluptas doloremque. Architecto maxime obcaecati corrupti adipisci labore fugit exercitationem, vitae quia cum officia quis? Temporibus aperiam, illum ducimus, tenetur rem, debitis ipsa voluptas asperiores placeat aut laboriosam cumque nobis sunt esse quibusdam odit porro voluptatem quo corrupti ab. Consequuntur, dolorum. Rem est incidunt magni non ipsam nisi nemo excepturi debitis cupiditate! Hic officiis nulla, eius consequuntur explicabo et provident ratione velit sapiente necessitatibus adipisci? Consectetur, neque quos. Vero nulla exercitationem obcaecati. Ipsum omnis iste ea alias eos blanditiis nesciunt non cum est, maxime, quam iure earum aspernatur aliquam! Harum necessitatibus est dolorum omnis autem, iure aliquid totam soluta et quia cumque vitae iusto illum sint laboriosam quod eaque voluptate quos molestiae pariatur praesentium deleniti a! Accusamus asperiores ullam, ducimus rerum eligendi adipisci nobis modi dolorum totam molestias commodi ut repellat pariatur deleniti laudantium doloribus hic quam aspernatur distinctio optio praesentium incidunt dicta impedit laboriosam! Provident dolor accusantium ullam deserunt doloribus, consequatur explicabo. Recusandae autem suscipit deleniti dolorem dolor explicabo id architecto aliquid animi ipsum obcaecati veniam quia, laboriosam magni eos ipsa doloremque quis magnam impedit. Voluptas, eius placeat ex alias, laudantium perferendis facilis officiis culpa voluptatem aliquam ipsam libero veritatis non inventore repellendus quas eaque quos provident illum nobis. Ut molestias eos accusantium porro, esse impedit cum aperiam laudantium minima quas quia at doloribus molestiae nobis fugit, ipsam deleniti excepturi nostrum voluptatibus atque incidunt. Sed vero totam nemo qui recusandae sapiente consequatur, perspiciatis quaerat eum voluptate doloribus. Doloremque dolore corrupti ut nostrum fuga amet voluptates, iusto libero tempore vero non sunt illum facere perspiciatis labore cumque sit modi ratione, possimus eos adipisci fugit odio quod! Aliquid vero deleniti suscipit earum nobis quis consectetur perspiciatis sequi accusamus rerum numquam vel aperiam, magnam animi amet reprehenderit tempore ipsa facilis tempora! Amet ipsa animi unde dolore quae recusandae reiciendis harum, suscipit repellendus! Distinctio porro vitae iusto soluta sed ipsum iste ipsa non eum error necessitatibus saepe nemo ea quam minima molestias consequuntur deleniti, nostrum minus reiciendis modi in officia incidunt. Ipsa voluptatem assumenda odio consequuntur reprehenderit officia nesciunt. Recusandae, maxime! Nobis, atque. Asperiores deleniti sunt corrupti aliquam fuga odit esse iste, ullam quod et neque vero quas amet architecto deserunt accusamus praesentium. Commodi ea deserunt ut vitae dolorem adipisci nisi, repellat sint voluptates aspernatur provident dolores? Sint aliquam nisi ex aliquid aperiam mollitia natus voluptate, nesciunt provident officiis nostrum libero soluta voluptas laudantium ea beatae tempore eius nihil fugiat odio perspiciatis minima! Id incidunt vitae officiis veniam maiores totam reprehenderit dolorum eius quam culpa. Commodi ipsam expedita obcaecati corrupti, dignissimos ducimus? A velit quo debitis est rerum ipsa excepturi perferendis quae. Iure quam amet voluptates quae aut odit beatae explicabo, quasi numquam blanditiis reprehenderit illo? Voluptatibus, sapiente suscipit! Quod mollitia enim cum!</p>
            </div>

            <center>
                <Link to='/'><button className='btn btn-warning my-10'>Back Home</button></Link>
            </center>

        </div>
    );
};

export default LearnMore;