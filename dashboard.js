$(document).ready(function() {
    // Load initial dashboard section
    loadDashboardSection('home');
  
    // Handle sidebar navigation
    $('.sidebar .nav-link').on('click', function(e) {
      e.preventDefault();
      const section = $(this).data('section');
      if (section) {
        loadDashboardSection(section);
      }
    });
  });
  // Load dashboard section content
  function loadDashboardSection(section) {
    $('.sidebar .nav-link').removeClass('active');
    $(`[data-section="${section}"]`).addClass('active');
  
    const contentArea = $('#contentArea');
  
    switch(section) {
      case 'home':
        contentArea.html(`
          <div class="dashboard-card">
            <h2>Dashboard Overview</h2>
            <div class="row">
              <div class="col-md-3">
                <div class="stat-card">
                  <h3>12</h3>
                  <p>Active Tasks</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="stat-card">
                  <h3>5</h3>
                  <p>Pending Requests</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="stat-card">
                  <h3>8</h3>
                  <p>Notifications</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="stat-card">
                  <h3>15</h3>
                  <p>Documents</p>
                </div>
              </div>
            </div>
          </div>
          <div class="dashboard-card">
            <h3>Recent Activity</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">New announcement: Company meeting scheduled for Friday</li>
              <li class="list-group-item">IT Request #1234 has been resolved</li>
              <li class="list-group-item">New document uploaded to HR folder</li>
              <li class="list-group-item">Task "Project Review" marked as completed</li>
            </ul>
          </div>
        `);
        break;
      case 'profile':
        contentArea.html('<div class="alert alert-info">Profile section content coming soon!</div>');
        break;
      case 'tasks':
        contentArea.html('<div class="alert alert-info">Tasks section content coming soon!</div>');
        break;
      case 'notifications':
        contentArea.html('<div class="alert alert-info">Notifications section content coming soon!</div>');
        break;
      case 'requests':
        contentArea.html('<div class="alert alert-info">My Requests section content coming soon!</div>');
        break;
      case 'documents':
        contentArea.html('<div class="alert alert-info">Documents section content coming soon!</div>');
        break;
      case 'settings':
        contentArea.html('<div class="alert alert-info">Settings section content coming soon!</div>');
        break;
      default:
        contentArea.html('<div class="alert alert-warning">Section not found.</div>');
    }
  }
  
  // Toast notification function (for feedback)
  function showToast(message, type = 'info') {
    const existingToasts = $('.toast-notification');
    existingToasts.remove();
  
    const toast = $('<div>')
      .addClass(`toast-notification alert alert-${type} alert-dismissible fade show`)
      .css({
        position: 'fixed',
        top: '20px',
        right: '20px',
        'z-index': 9999,
        'max-width': '350px',
        'box-shadow': '0 4px 12px rgba(0,0,0,0.1)'
      })
      .html(`
        ${message}
        <button type="button" class="btn-close" onclick="$(this).parent().remove()"></button>
      `);
  
    $('body').prepend(toast);
  
    setTimeout(() => {
      if (toast.parent().length) {
        toast.remove();
      }
    }, 5000);
  }
  
  // Placeholder for handleLogout
  function handleLogout() {
    showToast('Logout feature coming soon!', 'info');
  }
  
  // Stub for showView to prevent errors
  function showView(viewId) {
    showToast(`Navigation to ${viewId} not available in standalone mode`, 'info');
  }