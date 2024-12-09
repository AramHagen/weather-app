describe('Simple Test', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });
});
// describe('getDayAbbreviation', () => {
//     it('should return the correct day abbreviation for a given date', () => {
//         const result = getDayAbbreviation('2024-12-09');
//         expect(result).toBe('MON');
//     });
// });
// describe('hello test', () => {
//     // No need to set up the DOM since we're testing non-DOM functions
//     // Mock the addEventListener method to prevent it from running
//     beforeAll(() => {
//         spyOn(window, 'addEventListener').and.returnValue(undefined);
//     });
//     it('should pass this sample test2', () => {
//         expect(true).toBe(true);
//     });
//
//     // it('should validate required fields correctly', () => {
//     //     expect(checkRequiredValidation("username")).toBe(true);
//     //     expect(checkRequiredValidation("")).toBe(false);
//     // });
//     //
//     // it('should validate checkbox correctly', () => {
//     //     expect(checkBoxValidation(true)).toBe(true);
//     //     expect(checkBoxValidation(false)).toBe(false);
//     // });
// });

// describe('hello test',() => {
//     beforeEach(() => {
//         // Add the necessary DOM structure
//         document.body.innerHTML = `
//       <div id="login-container">
//         <form id="login-form">
//           <input id="username" type="text">
//           <input id="password" type="password">
//           <button id="show-password">Show Password</button>
//           <div id="eye-icon"></div>
//           <input id="location-permission" type="checkbox">
//         </form>
//       </div>
//       <div id="loader-container" class="hidden"></div>
//       <div id="weather-container" class="hidden"></div>
//       <div id="weekly-forecast-container"></div>
//     `;
//
//         // Reinitialize the eventListeners
//         eventListeners();
//     });
//
//     it('should pass this sample test2', () => {
//         expect(true).toBe(true);
//     });
//     it('should handle the DOM correctly', () => {
//         const loginFormElement = document.getElementById('login-form');
//         expect(loginFormElement).not.toBeNull(); // Ensure the form exists
//     });
//
//     it('should toggle password visibility', () => {
//         const showPasswordButton = document.getElementById('show-password');
//         const passwordElement = document.getElementById('password');
//         const eyeIcon = document.getElementById('eye-icon');
//
//         // Simulate a click event on the "show password" button
//         showPasswordButton.click();
//
//         // Check the result
//         expect(passwordElement.type).toBe('text'); // Should toggle to text
//         expect(eyeIcon.classList.contains('fa-eye')).toBe(false);
//         expect(eyeIcon.classList.contains('fa-eye-slash')).toBe(true);
//     });
// })
//
//
//
// // describe('Main JS Tests', () => {
// //     beforeEach(() => {
// //         // Add the necessary DOM structure
// //         document.body.innerHTML = `
// //       <div id="login-container">
// //         <form id="login-form">
// //           <input id="username" type="text">
// //           <input id="password" type="password">
// //           <button id="show-password">Show Password</button>
// //           <div id="eye-icon"></div>
// //           <input id="location-permission" type="checkbox">
// //         </form>
// //       </div>
// //       <div id="loader-container" class="hidden"></div>
// //       <div id="weather-container" class="hidden"></div>
// //       <div id="weekly-forecast-container"></div>
// //     `;
// //
// //         // Reinitialize the eventListeners
// //         eventListeners();
// //     });
// //
// //     it('should handle the DOM correctly', () => {
// //         const loginFormElement = document.getElementById('login-form');
// //         expect(loginFormElement).not.toBeNull(); // Ensure the form exists
// //     });
// //
// //     it('should toggle password visibility', () => {
// //         const showPasswordButton = document.getElementById('show-password');
// //         const passwordElement = document.getElementById('password');
// //         const eyeIcon = document.getElementById('eye-icon');
// //
// //         // Simulate a click event on the "show password" button
// //         showPasswordButton.click();
// //
// //         // Check the result
// //         expect(passwordElement.type).toBe('text'); // Should toggle to text
// //         expect(eyeIcon.classList.contains('fa-eye')).toBe(false);
// //         expect(eyeIcon.classList.contains('fa-eye-slash')).toBe(true);
// //     });
// // });