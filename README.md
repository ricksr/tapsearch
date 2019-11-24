<h1>TapSearch</h1>

  This app helps you to add paragraphs** and index them

  then using search box , you can search for any particular keyword,

  it will show in which paragraphs the keywords occured .

<ul>
 <h3> # How to use it </h3> 

  <li> you can add <strong>paragraphs**</strong> by your own or upload pdf or txt file and copy the paragraph
      from the text area section after extracting</li>
    
   <img src = "https://github.com/ricksr/tapsearch/blob/master/images/1.png">
    
  <li>click on <strong>"Send"</strong> button to run the algo and index it</li>
  
  <li>Then type any desired word and search using <strong>"search"</strong> button</li>
  <img src = "https://github.com/ricksr/tapsearch/blob/master/images/2.png">
  <li>click on <strong>"Clear"</strong> button to clear the mapping and local storage</li>
</ul>

<p>Some outputs</p>

**<img src = "https://github.com/ricksr/tapsearch/blob/master/images/3.png">
*paragraphs can be only identified if you ENTER two new lines (\n\n) after one para end.
<br>
<br>
<p>Code snippet</p>
  Here I'm using a <i>MAP < KEY  ,  LIST [ ] ></i>
  WHERE <i>KEY</i> is our word and in <i>LIST</i> we are storing the paragraph ranges
  we are a giving a rank , then using a set to store unique occurences of paras or INDEX
  and returning an array after processing it from SET OBJECT.
   
  <img src = "https://github.com/ricksr/tapsearch/blob/master/images/4.png">
