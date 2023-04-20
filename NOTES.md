Here are a few notes on the test

There is the main candidate under /tests and the experiment to modularise under /tests/experiment. The latter is more to demonstrate what I intended to do as part of the next stage knowing that the main test was failing. 

Tests fail to run due to trying to run this as both Jest and using Playwright's own test runner. This is annoying as if I had more time I would definitely move it all to the preffered test runner (I assumed Jest when writing). Also I realised I was going at it as someone with CyressJS background not Playwright. 

Initial implementation and experiment was to modularize the product selection. This was so that any product could be inputted. The long string of 'awaits' would be broken down into simpler functions, e.g. clickBasket, clickCheckout. But again time.

If I had further time to implement I would look to ask what the target of the test was and focus on that. E.g. if the target was to test the checkout prompt to login, then I would prefer to have an API call create a basket of goods and have the last moment maybe use a browser.

Look forward to feedback.