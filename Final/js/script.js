var data = [ //all of the information for all of the sections
    {
      id: 1,
      title: 'About me',
      body: 'I am a 21 year old programmer born on June 12th, 1996. I am currently attending Milwaukee Area Technical College and in the mobile applications devleopment feild.',
      body2: 'I currently work mostly on mobile appilcations and software development, while also working on some game development on the side as well as hopping online to learn a new skill to advance my knowledge.',
      body3: 'In my free time I like to play video games, read or listen to music.'
    },
    {
      id: 2,
      title: 'Education',
      body: 'I attened Menomonee Falls High School for high school and graduated in 2015 with honers and with exceptional knowledge in Math and Computer Science',
      body2: 'Currently I attend Milwaukee Area Technical College and I am in the Moble Applications Devleopment program. I have plans to graduate in 2019, and have been attending since 2015 working towards an Accoicates Degree'
    },
    {
      id: 3,
      title: 'Work Skills',
      body: 'While at MATC, I have learned through multible classes the team working skill known as Agile Devleopment and it is a continuous skill I still use to this day. I can easily work with any sort of agile team and complete daily sprints fully with little to no issues',
      body2: 'I can also find solutions to almost any issues. I care deeply about my work and will do my best to find a solution to any issues that may come about, whether that would be a quick google search or reaching out to others for help, I will find solutions to problems',
      body3: 'Working hard and keeping mistakes to a minimum is also something I do when working on projects. In the end, I always do my best to make my work as perfect as possible to the standards set. I will always work hard and keep my mistakes to a minimum.'
    },
    {
      id: 4,
      title: 'Programming Skills: C#',
      body: 'C# was the first programming language that I learned and one that has stuck with me to this day. It is also the language I have the second to most knowledge in.',
      body2: 'Along side working with both the console and UI in Visual Studio with C#, I also developed 3 games with the Unity engine using C#',
      body3: 'Some of my projects also include a quiz app, a calculator app, and a couple indie game projects I am still working on.'
    },
    {
      id: 5,
      title: 'Programming Skills: Java',
      body: 'Java has, and continues to be the language I work with the most. It is the language that I have developed the most of my projects in, some of them being a Grade Book App, another Quiz app that used the UI feature of NetBeans, and a small indie game for a class in college.',
      body2: 'I have also used the sister language of Java, JavaScript, for my HTML projects'
    },
    {
      id: 6,
      title: 'Programming Skills: Swift',
      body: 'For my mobile app development, I have used the Swift language in XCode to develop apps for Apple Products. This is still a new language to me, but it is one that I am slowly learning and gaining new skill in',
      body2: 'The project I have done with Swift and XCode was a Zen Music App that did, as the title says, play Zen music. It was an app I am very happy with, and more then happy to show off to anyone.',
      body3: 'If you wish to download a copy of the project, please head back to the main page for the download link'
    },
    {
      id: 7,
      title: 'Programming Skills: HTML',
      body: 'My last programming skill that I have learned is the ever so famous web development one HTML. This is a language I have about a years worth experence with and I have made a couple websites that I am happy with.',
      body2: 'The two websites I was most happy to make was one baised around my YouTube gaming channel that I used to have, and the other one is this one that youre currently reading right now',
      body3: 'This whole website is an example of my work that I am most happy with'
    },
    {
      id: 8,
      title: 'Contact Me',
      body: 'Email: matthew.Cmyers96@yahoo.com',
      body2: 'Phone: 262-720-2580',
      body3: 'Twitter: @CoderMattMyers'
    }
  ];

/*var list = [

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
];*/

//jquery object variables
var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');
//var $lists = $('#list-items');

function initPosts(){
  for(var i = 0; i < data.length; i++){
    var postId = 'post--' + data[i].id,
      $post = $('<section class="post"></section>'),

      $title = $('<h2 class="title"></h2>'),
      $body = $('<blockquote></blockquote>'),
      $body2 = $('<p></p>'),
      $body3 = $('<p></p>'),
      /*$item = $('<li></li>'),
      $item2 = $('<li></li>'),
      $item3 = $('<li></li>'),
      $item4 = $('<li></li>'),*/

      $navItem = $('<li></li>');

      //add data to the webpage
      $title.text(data[i].title);
      $body.text(data[i].body);
      $body2.text(data[i].body2);
      $body3.text(data[i].body3);
      /*$item.text(data[i].item);
      $item2.text(data[i].item2);
      $item3.text(data[i].item3);
      $item4.text(data[i].item4);*/

      //add nav item data
      $navItem.attr('id', data[i].id);
      $navItem.text(data[i].title);

      //$item.text(list[i].item);


      //combine elements to the one page
      $post.attr('id', postId);
      $post.append($title);
      $post.append($body);
      $post.append($body2);
      $post.append($body3);

      /*if($item.text = true)//code works for if statement, but the item is still being appended on all pages
      {
        $post.append($item);
      }
      else{

      }*/


      /*$post.append($item);
      $post.append($item2);
      $post.append($item3);
      $post.append($item4);*/

      //add post and nav elements
      $posts.append($post);
      $nav.append($navItem);

      //$lists.append($item);


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

    $lists.append($item);
  }
}*/

initPosts();

//makeList();
