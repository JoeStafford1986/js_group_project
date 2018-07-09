const PubSub = require('../helpers/pub_sub.js');

const DirectoryView = function(directoryContainer) {
  this.directoryContainer = directoryContainer;
}

DirectoryView.prototype.bindEvents = function () {
  this.populateDirectory();
};

DirectoryView.prototype.populateDirectory = function() {
  PubSub.subscribe('Cryptid:data-loaded', (evt) => {
    const cryptidData = evt.detail;
    cryptidData.forEach((cryptid) => {
      const text = `${cryptid.name}`;
      const newLI = this.createNewElement('li', text);


      newLI.id = cryptid._id;

      this.directoryContainer.appendChild(newLI);

      newLI.addEventListener('click', (evt) => {
        PubSub.publish('DirectoryView:li-clicked', newLI.id);
      });
    });
  });
};

DirectoryView.prototype.createNewElement = function(type, content) {
  const newElement = document.createElement(type);
  // newElement.classList.add('cryptidname');
  newElement.textContent = content;

  return newElement;
};

module.exports = DirectoryView;
