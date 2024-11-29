// @ts-check
const { test, expect } = require('@playwright/test');

test('TodoMVC Test', async ({ page }) => {
  // Step 1: Go to TodoMVC
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.screenshot({ path:'tests/screenshots/'+'homePage.png'})
  await page.waitForTimeout(1000);


  // Step 2: Validate that you are on the correct URL
  expect(page.url()).toBe('https://todomvc.com/examples/react/dist/');
  await page.waitForTimeout(1000);


  // Step 3: Add a TODO item with the text "TODO 1 - " concatenated with the current date
  const currentDate = new Date().toISOString().split('T')[0];
  const todo1Text = `TODO 1 - ${currentDate}`;
  await page.fill('.new-todo', todo1Text);  // Input field selector
  await page.press('.new-todo', 'Enter');   // Press Enter to add the todo item
  await page.screenshot({ path:'tests/screenshots/'+'todo1Added.png'})
  await page.waitForTimeout(1000);


  // Step 4: Verify that the new to-do item appears in the list
  const todo1 = await page.locator('.todo-list li').first();  // Get first todo item
  await expect(todo1).toHaveText(todo1Text);
  await page.waitForTimeout(1000);


  // Step 5: Add a TODO item with the text "TODO 2 - " concatenated with tomorrow's date
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const todo2Text = `TODO 2 - ${tomorrow.toISOString().split('T')[0]}`;
  await page.fill('.new-todo', todo2Text);
  await page.press('.new-todo', 'Enter');
  await page.screenshot({ path:'tests/screenshots/'+'todo2Added.png'})
  await page.waitForTimeout(1000);



  // Step 6: Mark the current date TODO item as completed
  await todo1.locator('.toggle').check();  // Check the checkbox to mark as completed
  await page.screenshot({ path:'tests/screenshots/'+'todoCompleted.png'})
  await page.waitForTimeout(1000);



  // Step 7: Verify that the item is displayed as completed (e.g., struck-through text)
  await expect(todo1).toHaveClass(/completed/);
  await page.waitForTimeout(1000);


  // Step 8: Delete the TODO 2 item
  //const todo2 = await page.locator('.todo-list li').nth(1);  // Get the second todo item
  await page.locator(`li:has-text("${todo2Text}") input.toggle`).check();
  await page.locator(`li:has-text("${todo2Text}") button.destroy`).click();
  expect(await page.locator('li >> text=' + todo2Text).isVisible()).toBeFalsy(); // Verify removed
  await page.screenshot({ path:'tests/screenshots/'+'todoRemoved.png'})
  await page.waitForTimeout(1000);


     


  // Step 9: Verify that the item is removed from the list
  const todoList = await page.locator('.todo-list li');
  const todoCount = await todoList.count();
  expect(todoCount).toBe(1);  // Only one todo item (TODO 1) should remain
  await page.waitForTimeout(1000);

});
