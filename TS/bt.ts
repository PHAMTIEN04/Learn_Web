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
    GetFullName(){
        return this.LastName + " " + this.FirstName;
    }
    GetGender(){
        return this.Gender ? "Nam":"Nữ";
    } 
    Hienthi(){
        return "Mã sinh viên: " + this.ID +"\n" +"Họ và tên: "+ this.GetFullName() + "\n" + "Giới tính: " + this.GetGender() + "\n" + "Ngày sinh: " + this.DOB; 
        // console.log("Mã sinh viên: ",this.ID);
        // console.log("Họ và tên: ",this.GetFullName());
        // console.log("Giới tính: ",this.GetGender());
        // console.log("Ngày sinh: ",this.DOB);
    }

    TBC(){
        var s = this.Score.reduce((total ,value)=>{
            return total + value;
        });
        return s/this.Score.length;
        
    }
    HocLuc(){
        if(s.TBC() <= 10 && s.TBC() > 8){
            return "Giỏi";
        }
        else if(s.TBC() > 6.5){
            return "Khá";
        }
        else if(s.TBC() > 3){
            return "Trung bình";
        }
        else{
            return "Yếu";
        }
    }

}
     
var s = new Students("122","Tiến","Phạm",true,[2,8,10],"17/11/2004");
console.log(s.Hienthi());
console.log("Điểm trung bình sinh viên: ",s.TBC());
console.log(s.HocLuc())

