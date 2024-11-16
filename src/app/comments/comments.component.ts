import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
   <h3>Comentarios</h3>
   <img src= "https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9-s1100-c50.jpg" />
<p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem maxime in sit quis vitae, veniam, voluptatibus molestias architecto tempore similique vel? Quam voluptate iure quos optio. Harum, unde deserunt!
  </p>
  `,
  styles: `
  img {
    width: 80%;
    height: auto;
  }`,
})
export class CommentsComponent {

}
