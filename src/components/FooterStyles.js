import styled from 'styled-components';

export const Box = styled.div`
// padding: 80px 60px; //before
padding: 80px 0px; //after
background: white;
position: static;
bottom: 0;
width: 100%;


@media (max-width: 1200px) {
	// padding: 70px 30px; //before
	padding: 70px 0px; //after
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
// margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(470px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(500px, 1fr));
}
`;

export const FooterLinkL = styled.a`
color: #6666;
margin-bottom: 20px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const FooterLinkR = styled.a`
color: #6666;
margin-bottom: 20px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
