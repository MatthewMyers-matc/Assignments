var data = [
    {
      id: 1,
      title: 'About me',
      body: 'I am a 21 year old programmer born on June 12th, 1996. I am currently attending Milwaukee Area Technical College and in the mobile applications devleopment feild.',
      body2: 'I have learned a veriety of programming skills including, but not limited to: C#, Java, HTML, Swift, C++'
    },
    {
      id: 2,
      title: 'Education',
      body: 'I attened Menomonee Falls High School for high school and graduated in 2015 with honers and with exceptional knowledge in Math and Computer Science',
      body2: 'Currently I attend Milwaukee Area Technical College and I am in the Moble Applications Devleopment program. I have plans to graduate in 2019, and have been attending since 2015 working towards an Accoicates Degree'
    },
    {
      id: 3,
      title: 'Main Work Skills',
      body: 'While at MATC, I have learned though multible classes the team working skill known as Agile Devleopment and is a continuous skill I still use to this day',
      body2: 'I can easily work with an Agile team and complete sprints quickly and with effecant skill'
    }
  ];

var list = [

  {
    item: 'This 1'
  },
  {
    item: 'This 1'
  },
  {
    item: 'This 1'
  },
  {
    item: 'This 1'
  },
  {
    item: 'This 1'
  }
];

//jquery object variables
var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');

function initPosts(){
  for(var i = 0; i < data.length; i++){
    var postId = 'post--' + data[i].id,
      $post = $('<section class="post"></section>'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<blockquote></blockquote>'),
      $body2 = $('<p></p>'),
      $body3 = $('<p></p>'),
      $navItem = $('<li></li>');

      //add post data
      $title.text(data[i].title);
      $body.text(data[i].body);
      $body2.text(data[i].body2);
      $body3.text(data[i].body3);

      //add nav item data

      $navItem.attr('id', data[i].id);
      $navItem.text(data[i].title);

      //combine post elements
      $post.attr('id', postId);
      $post.append($title);
      $post.append($body);
      $post.append($body2);
      $post.append($body3);

      //add post and nav elements
      $posts.append($post);
      $nav.append($navItem);

      //wire up nav item click event
      $navItem.on('click', function() {
        var id = $(this).attr('id');
        $posts.children().hide();
        $posts.find('#post--' + id).fadeIn();
      });

      //hide all posts and show the intro
      $posts.children('.post').hide();
      $intro.fadeIn(1000);
  }
}

/*function makeList()
{
  for(var i = 0; i < list.length; i++){
    item = $('<li></li>');

    $item.text(list[i].item);
  }
}*/

initPosts();
