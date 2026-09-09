# Vyntrax Prep - Setup Guide

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ghost4518/vyntrax-prep.git
cd vyntrax-prep
```

### 2. Open in Browser
- Simply open `index.html` in your web browser
- No server or installation required!

### 3. Access Different Sections

#### Home Page
- URL: `index.html`
- Features: Navigation to all subjects and mock tests

#### Subjects
- Mathematics: `subjects/mathematics.html`
- Physics: `subjects/physics.html`
- Chemistry: `subjects/chemistry.html`

#### Mock Tests
- URL: `mock-test/index.html`
- Select test type and start practicing

#### Study Map
- URL: `study-map/index.html`
- Follow structured learning sequence

#### Admin Panel
- Login: `admin/login.html`
- Dashboard: `admin/dashboard.html` (redirects after login)

## Admin Login Credentials

```
Username: ghost441245
Password: 112208123@pyqjee
```

## Features to Explore

### 1. Theme Toggle
- Click Settings button in navbar
- Toggle Dark Mode for comfortable studying
- Preference saves automatically

### 2. Mock Tests
- Start with Full Mock Test 1 or 2
- Try chapter-specific tests
- Submit and view detailed solutions
- Mistakes explained with reasoning

### 3. Study Map
- Week-by-week preparation schedule
- Filter by subject
- Clear backlogs with focused sessions
- Track learning progress

### 4. Admin Features
- Monitor user activities
- View IP addresses and locations
- Track login times and frequency
- See geographic distribution
- Access real-time logs

## Browser Compatibility

✅ Chrome (Recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Opera  
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Customization

### Add More Questions
1. Edit `js/mock-test.js`
2. Add questions to `questionsData` object
3. Follow the existing format:
   ```javascript
   {
       question: 'Your question here?',
       options: ['Option A', 'Option B', 'Option C', 'Option D'],
       correct: 0, // Index of correct answer
       explanation: 'Why this is correct...',
       subject: 'Mathematics',
       concept: 'Functions'
   }
   ```

### Change Colors
- Edit CSS variables in `css/styles.css`
- Primary color: `--primary-color: #6366f1`
- Secondary color: `--secondary-color: #ec4899`
- Add more as needed

### Add Study Topics
1. Edit `study-map/index.html`
2. Add new timeline items following the structure
3. Update CSS in `css/study-map.css`

## Tips for Best Experience

1. **Desktop**: Use Chrome or Firefox for best performance
2. **Mobile**: All features work on mobile, optimize for small screens
3. **Night Study**: Toggle Dark Mode in Settings
4. **Progress**: Bookmark the study map page
5. **Admin Access**: Keep credentials secure

## Troubleshooting

### Pages not loading?
- Ensure all files are in correct directories
- Check browser console (F12) for errors
- Clear browser cache and reload

### Theme not saving?
- Check if localStorage is enabled
- Try a different browser
- Clear browser cookies

### Admin login issues?
- Verify username and password exactly as shown
- Check caps lock
- Ensure pop-ups are allowed

## Deployment

To deploy online:

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be live at `https://username.github.io/vyntrax-prep`

### Other Hosting
- Vercel
- Netlify
- Firebase Hosting
- AWS S3
- Any static file hosting service

## Future Updates

- Backend integration for data persistence
- User authentication system
- Advanced progress analytics
- Video tutorials
- Community features
- Mobile app version

## Support

For issues or suggestions:
- GitHub Issues: https://github.com/ghost4518/vyntrax-prep/issues
- Instagram: @vyntrax.india

---

**Happy Studying! 🚀**

Make Vyntrax Prep part of your JEE preparation journey and ace your exams!