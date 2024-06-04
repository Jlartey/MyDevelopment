const { Component } = ng.core;

@Component({
  selector: '#app',
  template: `
    <!-- Your existing template code here -->
  `
})
class LibrariesInstallerComponent {
  availableLibraries = [
    { id: 1, name: 'express' },
    { id: 2, name: 'async' },
    { id: 3, name: 'request' },
    { id: 4, name: 'browserify' },
    { id: 5, name: 'grunt' }
  ];

  librariesSelectedForInstallation = [
    { id: 6, name: 'socket.io' },
    { id: 7, name: 'mocha' }
  ];

  selectedLibrary = null;

  setSelectedLibrary(library) {
    this.selectedLibrary = library;
  }

  onMoveLeftClick() {
    if (this.selectedLibrary) {
      this.librariesSelectedForInstallation = this.librariesSelectedForInstallation
        .filter(lib => lib !== this.selectedLibrary);
      this.availableLibraries.push(this.selectedLibrary);
      this.availableLibraries.sort((a, b) => a.id - b.id);
      this.selectedLibrary = null;
    }
  }

  onMoveRightClick() {
    if (this.selectedLibrary) {
      this.availableLibraries = this.availableLibraries
        .filter(lib => lib !== this.selectedLibrary);
      this.librariesSelectedForInstallation.push(this.selectedLibrary);
      this.librariesSelectedForInstallation.sort((a, b) => a.id - b.id);
      this.selectedLibrary = null;
    }
  }

  installLibs() {
    if (this.librariesSelectedForInstallation.length > 0) {
      this.librariesSelectedForInstallation = [];
    }
  }
}
