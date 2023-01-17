function searchEmoji(){
    const table = document.getElementById("tableData");
    table.innerHTML=" ";

    const input = document.getElementById("input").value;

    const tagsArray=[];

    emojiList.map((ele)=>{
    if(ele.tags.includes(input)){
       tagsArray.push(ele);

 
         table.innerHTML += `
         <tr class="tablerow">
         <td class="tablerows" id="emojiIcon">${ele.emoji}</td>
         <td class="tablerows"  id="emojiName">${ele.aliases}</td>
         <td class="tablerows"  id="emojiTags">${ele.description}</td>
         </tr>
         `

       }
    })
     console.log(tagsArray);

}
function searchEmojiKeyup(){

    const table = document.getElementById("tableData");
    table.innerHTML="";

    const input = document.getElementById("input").value;
    const tagsArray=[];

    emojiList.map((ele)=>{
        ele.tags.map((element)=>{
            if(element.startsWith(input)){
                tagsArray.push(ele);
                 
                table.innerHTML += `
                <tr class="tablerow">
                <td class="tablerows" id="emojiIcon">${ele.emoji}</td>
                <td class="tablerows"  id="emojiName">${ele.aliases}</td>
                <td class="tablerows"  id="emojiTags">${ele.description}</td>
                </tr>
                `
         
                }
             })
        })
 
     console.log(tagsArray);

}