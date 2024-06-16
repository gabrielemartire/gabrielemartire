
    import { annotate } from 'https://unpkg.com/rough-notation?module';
    
    const n1 = document.querySelector('em');
    const n2 = document.querySelector('strong');
  //  const n3 = document.querySelector('h1');
    const n4 = document.querySelector('span');
    const n5 = document.querySelector('#block');
    
    const a1 = annotate(n1, { type: 'underline', color: 'green' });
    const a2 = annotate(n2, { type: 'circle', color: 'red', padding: 10 });
  //  const a3 = annotate(n3, { type: 'box', color: 'orange' });
    const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
    const a5 = annotate(n5, { type: 'bracket', color: 'pink', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 })
    
    a1.show();
    a2.show();
  //  a3.show();
    a4.show();
    a5.show();
