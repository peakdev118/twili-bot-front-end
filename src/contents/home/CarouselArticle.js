import React from "react";
import { Carousel, Container } from "react-bootstrap";

import '../style/carousel-article.css';

function CarouselArticle() {
	return (
		<section>
			<Container className="px-3 pb-5">
				<Carousel controls = {false} indicators = {false}>
					<Carousel.Item interval={3000}>
						<div className="p-30">
							<p className="carousel-article text-center">
								By using SMS to remind clients of payments, there has been a 66.6 percent increase in clients making in clients making on-time payments
							</p>
							<p className="text-center pt-3 font-size-18">Jacaranda Finance</p>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<div className="p-4">
							<p className="carousel-article text-center">
								MessageMedia saved hours and decreased 'no shows' by as much as 25%. Financially, we are truly thankful!
							</p>
							<p className="text-center pt-3 font-size-18">IT Manager, Just Better Care Australia</p>
						</div>
					</Carousel.Item>
				</Carousel>
			</Container>
		</section>
	)
}

export default CarouselArticle;