# FOOTBALL AND MANAGER

We are looking for managers. This is a web based football manager game.

What you need is (for now):
###### Client:
* Twitter Bootstrap http://twitter.github.com/bootstrap
* jQuery http://jquery.com

###### Middleware:
* Node.js http://nodejs.org/
* Express.js http://expressjs.com/
* Mongoose http://mongoosejs.com

###### Database:
* MongoDB http://www.mongodb.org/

Good points to read for beginning all these stuff:

- Bootstrap: http://twitter.github.com/bootstrap
Good stuff for responsive and easy design even for non designers like us. You only specify the grids and put things into these containers of the grids.

- Bootstrap Ajax: https://github.com/eldarion/bootstrap-ajax
Bootstrap is good for responsive design but I don't know if it supports ajax natively. So I looked up and I found this. This plugin takes the 'form' element and stops the synchronous request. Then makes the request asynch type ajax. You only need to define form class as "form ajax"

Something we used but not used anymore after Express.js:
* proces.cwd() gives you "Current Working Directory" (cwd) : http://nodejs.org/api/process.html#process_process_cwd
* url.parse(urlStr) parses the url so you can easily get the path and filenames on this url : http://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost
* fs.readFile(filename) lets you read the files on your file system. so you can serve static files like html, css and js (for client-side) : http://nodejs.org/api/fs.html#fs_fs_readfile_filename_encoding_callback
* path.join() I don't know what makes this handy or useful. I used it just because of the Next Point : http://nodejs.org/api/path.html#path_path_join_path1_path2
- (Next Point) static server; if we have a nodejs application, we can use it as a static file server too. Someone did it pretty so I got what dropped to my "pay" : https://gist.github.com/701407