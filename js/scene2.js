function scene2() {

    // Setup Stage
    const stage = document.querySelector('#stage');
    const stageImg = stage.querySelector('#stage-img');
    const castle = document.querySelector('#castle');
    const castleImgSrc = castle.getAttribute('src');
    stageImg.setAttribute('src', castleImgSrc);
    
    // Setup Cast
  
    const nedContainer = document.createElement('div');
    stage.append(nedContainer);
    nedContainer.style.position = 'absolute';
    nedContainer.style.width = '10%';
    nedContainer.style.height = '37%';
    nedContainer.style.top = '50%';
    nedContainer.style.left = '50%';
    nedContainer.style.top = '55%';
    nedContainer.style.left = '25%';


    const ned = document.querySelector('#ned');
    ned.style.width = '70%';
    ned.style.position = 'absolute';
    ned.style.top = 0;
    
    const leather = document.querySelector('#leather-armour');
    leather.style.position = 'absolute';
    leather.style.bottom = 0;

    nedContainer.append(ned);
    nedContainer.append(leather);


    // Character 1
  
    const joffContainer = document.createElement('div');
    joffContainer.id = 'joff-container';
    stage.append(joffContainer);
    joffContainer.style.width = '8%';
    joffContainer.style.position = 'absolute';
    joffContainer.style.height = '31%';
    joffContainer.style.top = '55%';
    joffContainer.style.left = '55%';
    
    const joff = document.querySelector('#joffrey');
    joffContainer.append(joff);
    joff.style.width = '75%';
    joff.style.position = 'absolute';
    joff.style.left = '33%';
    
    const kingWardrobe = document.querySelector('#king');
    joffContainer.append(kingWardrobe);
    kingWardrobe.style.position = 'absolute';
    kingWardrobe.style.bottom = 0;

    // Character 2
  
    // Setup Props
  
    // Prop 1
    const sword = document.querySelector('#sword');
    stage.append(sword);
    sword.style.position = 'absolute';
    sword.style.top = '77%';
    sword.style.left = '31%';
    sword.style.height = '5%';
    sword.style.transform = 'rotateY(150deg)';



    // Prop 2
  
    // Action!
  
    // Stage direction 1
  
// Existing Start Frame
frame(() => {
    sword.style.top = '77%';
    sword.style.left = '31%';
  });

  frame(() => {
    sword.style.top = '74%';
    sword.style.left = '36%';
  });

  frame(() => {
    sword.style.top = '71%';
    sword.style.left = '41%';
  });

  frame(() => {
    sword.style.top = '68%';
    sword.style.left = '47%';
  });

  frame(() => {
    sword.style.top = '64%';
    sword.style.left = '53%';
  });

  frame(() => {
    joffrey.style.top = 0;
    joffrey.style.left = '33%';
    joff.style.transform = 'rotateZ(220deg)';
  });
  
  frame(() => {
    joffrey.style.top = '17%';
    joffrey.style.left = '90%';
    joff.style.transform = 'rotateZ(140deg)';
  });
  
  frame(() => {
    joffrey.style.top = '35%';
    joffrey.style.left = '160%';
    joff.style.transform = 'rotateZ(260deg)';
  });
  
  frame(() => {
    joffrey.style.top = '55%';
    joffrey.style.left = '230%';
    joff.style.transform = 'rotateZ(180deg)';
  });
  
  frame(() => {
    joffrey.style.top = '75%';
    joffrey.style.left = '300%';
    joff.style.transform = 'rotateZ(100deg)';
  });
  
  }
  