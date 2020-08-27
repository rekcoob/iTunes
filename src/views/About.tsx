import React from 'react';

// styles
import './About.scss';

// component
const About: React.FC = () => {
	return (
		<article className="about">
			<h1>This is an about page</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra
				pellentesque tincidunt. Nam id turpis id justo sollicitudin lacinia. Ut
				tempus fermentum urna sed venenatis. Morbi iaculis tortor convallis,
				auctor neque vel, euismod mi. Mauris a massa eu nunc laoreet vestibulum
				a quis lorem. Nulla facilisi. In suscipit condimentum auctor. Maecenas
				interdum erat nibh, vel egestas nibh interdum ut. Nam ut neque in urna
				volutpat consectetur. Sed pretium, nisi ut condimentum molestie, mauris
				nisi cursus libero, sed dictum massa leo nec magna. Aliquam quis feugiat
				arcu. Curabitur ullamcorper lacus ipsum, ullamcorper lobortis arcu
				feugiat eleifend. Nam porttitor, ipsum a mollis imperdiet, arcu sapien
				mollis neque, eget tempor mi nunc nec ligula. Nullam eget tempus eros.
			</p>
			<p>
				Sed euismod purus eget erat ultrices, eu dapibus enim malesuada.
				Praesent tellus risus, imperdiet sit amet rhoncus nec, lacinia nec nisi.
				Cras dignissim auctor nulla, et consectetur erat imperdiet at. Quisque
				sit amet quam rhoncus, porttitor est et, venenatis justo. Nam eget
				aliquet turpis, ac congue ante. Donec nec odio vel turpis posuere semper
				ut ut neque. Ut viverra ligula blandit, tempor lorem et, tempor sapien.
				Vivamus et congue dolor. Mauris auctor velit non enim finibus, in dictum
				quam ultricies. In malesuada interdum urna imperdiet iaculis. Etiam eget
				ligula viverra, volutpat odio ullamcorper, maximus ligula. Aliquam elit
				odio, lacinia nec lacus non, ultricies tristique nisl. Duis in aliquet
				quam, et congue erat. Sed metus urna, commodo a ultricies nec, mollis in
				dui.
			</p>
		</article>
	);
};

export default About;
