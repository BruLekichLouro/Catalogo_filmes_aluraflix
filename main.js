var listFilms=['https://m.media-amazon.com/images/S/pv-target-images/1083b948613dcbc0aaacf28a83baa4db4d1cba4c2a7c94aa7639e7775ad37d29.jpg','https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg',"https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg"];

for(var i=0; i < listFilms.length; i++){
    document.write( "<img src="+ listFilms[i] + ">");
}
