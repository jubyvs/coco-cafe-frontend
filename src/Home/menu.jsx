import React from 'react';
import * as Bootstrap from 'react-bootstrap';

const Menu = () => {
    return(
        <Bootstrap.Row xs={1} md={4} className="home-menu g-5">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Bootstrap.Col>
                <Bootstrap.Card>
                    <Bootstrap.Card.Img variant="top" src="holder.js/100px160" />
                    <Bootstrap.Card.Body>
                    <Bootstrap.Card.Title>Card title</Bootstrap.Card.Title>
                    <Bootstrap.Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Bootstrap.Card.Text>
                    </Bootstrap.Card.Body>
                </Bootstrap.Card>
                </Bootstrap.Col>
            ))}
        </Bootstrap.Row>
    );
}

export default Menu;