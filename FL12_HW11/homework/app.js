const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function buildTree(root, structure) {
  root.append(buildTreeDom(structure));
}


function buildTreeDom(root) {
  if(!root) {
    return;
  }
  let ul = document.createElement('ul');
  for(let i = 0;i < Object.keys(root).length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<a href='#'>${root[i].title}</a>`;
    if (!root[i].children && root[i].children !== undefined) {
      li.setAttribute('data-empty', '');  
    }
    ul.append(li);
    let currentUl = buildTreeDom(root[i].children);
    if(currentUl) {
      ul.append(currentUl);
    }
  }
  return ul;
    }
buildTree(rootNode, structure);

(function () {
  const emptyDirs = document.body.querySelectorAll('li[data-empty]');
  for(let emptyFolder of emptyDirs) {
    let nothingInformation = document.createElement('li');
    nothingInformation.hidden = true;
    nothingInformation.innerHTML = '<i>Folder is empty</i>';
    emptyFolder.after(nothingInformation);
    emptyFolder.addEventListener('click', function () {
      nothingInformation.hidden = !nothingInformation.hidden;
    });
  }
}());

let folders = document.querySelector('ul').children;
folders[1].hidden = true;
folders[3].hidden = true;
folders[1].children[2].hidden = true;
folders[0].addEventListener('click', function () {
  folders[1].hidden = !folders[1].hidden;
});
folders[2].addEventListener('click', function () {
  folders[3].hidden = !folders[3].hidden;
});
folders[1].children[1].addEventListener('click', function () {
  folders[1].children[2].hidden = !folders[1].children[2].hidden;
});







