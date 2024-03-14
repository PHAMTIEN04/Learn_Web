class Students {
    ID: string;
    FirstName: string;
    LastName: string;
    Gender: boolean;
    Score: number[];
    DOB: string;
 
    
     constructor(ID:string,FirstName:string,LastName:string,Gender:boolean,Score:number[],DOB: string){
         this.ID = ID;
         this.FirstName = FirstName;
         this.LastName = LastName;
         this.Gender = Gender;
         this.Score = Score;
         this.DOB = DOB;
     } 
     
    Hienthi(){
        console.log("Mã sinh viên: ",this.ID);
        console.log("Họ và tên: ",this.LastName +" " + this.FirstName);
        console.log("Giới tính: ",this.Gender ? "Nam":"Nữ");
        console.log("Ngày sinh: ",this.DOB);
    }

    TBC(){
        var sum = 0;
        this.Score.map((value) =>{
            sum+=value;
        })
        return sum/this.Score.length;
    }
    HocLuc(){
        if(s.TBC() <= 10 && s.TBC() > 8){
            console.log("Giỏi");
        }
        else if(s.TBC() > 6.5){
            console.log("Khá");
        }
        else if(s.TBC() > 3){
            console.log("Trung bình");
        }
        else{
            console.log("Yếu");
        }
    }

}
     
var s = new Students("122","Tiến","Phạm",true,[9,8,10],"17/11/2004");
s.Hienthi();
console.log("Điểm trung bình sinh viên: ",s.TBC());
s.HocLuc()

var a :Date ;
