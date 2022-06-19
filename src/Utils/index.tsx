export const importAll = (r : any) => {
    let images : string [] = [];
    r.keys().forEach((item : string, index : number) => {
        console.log(item, r)
      images.push(r(item));
    });
    return images;
  };