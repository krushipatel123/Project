import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BudgetdemoserviceService } from '../budgetdemoservice.service';
import { Budget, BudgetData, CommunicationLogConstants, Desc, Documents, UpdateBudgetData } from './budget.model';
declare var $: any;
@Component({
  selector: 'app-bdget-demo-project',
  templateUrl: './bdget-demo-project.component.html',
  styleUrls: ['./bdget-demo-project.component.css']
})
export class BdgetDemoProjectComponent implements OnInit {
  budgetModel: Budget = new Budget();
  id: any;
  newData: Budget[] = [];
  newDataDisplay: Budget[];
  budgetDataDetails = new BudgetData();
  budgetDataDetailsList: BudgetData[] = [];
  descDetails: Desc[] = [];
  des: Desc = {
    budgetNumber: '',
    desc: '',
    fileName: ''
  }
fileURL='';
doc='';
  budgetNumber: any;
  budgets: Budget = {
    budgetID: '',
    categoryName: '',
    budget: '',
    budgetValue: '',
    isDeleted: false,
    BudgetDataHandlerList: []
  };
  budgetData: BudgetData = {
    budgetDataID: '',
    description: '',
    amount: '',
    fileName: '',
    isDeleted: false,
    file: new FormData(),
    budgetID: '',
    catName: '',
    budget: new Budget(),
    budgetDataValue: ''
  };
  document: Documents = {
    file: new FormData()
  }
  isShow = false;
  cindex: any;
  response: any = { upload: '' };
  total: any = 0;
  files: any;
  filestring: string = '';
  temp_budgetID: any;
  temp_amt = 0;
  updateBudgetData: UpdateBudgetData = {
    budgetDataID: '',
    description: '',
    amount: '',
    fileName: '',
  };
  editindex: any = 0;
  message: any;
  totalBudget: any = 0;
  isVisible: boolean = false;
  fileNameForTitle:any;
  constructor(private service: BudgetdemoserviceService, private toastr: ToastrService, private route: Router, private http: HttpClient
    , private renderer: Renderer2,private modalservice:NgbModal, private sanitizer: DomSanitizer) {
    this.newDataDisplay = this.newData;
  }

  @ViewChild('content') popupview!:ElementRef;
  @ViewChild('fileUpload') fileTypeEmpty!:ElementRef;
  fileNameForPreview:any;

  ngOnInit(): void {
    this.getDataBudget();
    this.getBudget();


  }

  onSubmit(form: NgForm) {
    if (!this.budgets.budgetID && this.budgets.budgetID == "") {
      var temp = {
        id: 0,
        budget: this.budgets.budget,
        categoryName: this.budgets.categoryName,
        isDeleted: this.budgets.isDeleted
      }
      this.service.addBudget(temp)
        .subscribe((data: any) => {
          if (data.Succeeded == true) {
            alert("fail");
          }
          else {
            // this.totalBudget = Number(this.total) + Number(temp.budget);
            this.getBudget();
            this.toastr.success('Message sent');
            form.reset();
          }
        });
    }
    else {
      this.service.updateBudget(this.budgets.budgetID, this.budgets).subscribe((res: any) => {
        console.log(res);
        this.getBudget();
        this.budgets.budgetID = '';
        this.budgets.categoryName = '';
        this.budgets.budget = '';

      })
    }
  }
  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }
  onAddClick() {
    this.budgets.categoryName ='';
    this.budgets.budget ='';
    this.cindex='';
    this.isVisible=false;
    this.total = 0;
    this.newData.forEach(element => {
      this.total += Number(element.budget);
    });
    if (this.total >= 5000) {

      alert("cannot add the category");
      $('#exampleModal1').modal('hide');
    }
    else {
      $('#exampleModal1').modal('show');
    }
  }

  onKey(event: any) { // without type info
    console.log(event.target.value);
    console.log(this.total)
    this.totalBudget = Number(this.total) + Number(event.target.value);
    if(this.totalBudget>5000){
      alert("budget should not be greater then 5000");
    }
    console.log(this.totalBudget >= 5000);
  }

  getProductsById(id: any) {
    this.service.getBudgetById(id).subscribe((e) => {
      this.budgetDataDetails = e;
      this.temp_budgetID = e.budgetID;
      this.temp_amt = e.budget;
      this.cindex = e.budgetID;
      if (Object.keys(this.budgetDataDetails).length == 0 ) {
        this.isVisible = false
      }
      else {
        this.isVisible = true
      }
    })
  }

  getBudget() {
    let total = 0;
    this.service.getBudgetList()
      .subscribe((res) => {
        this.newData = res;

        this.newData = res.map(index => {
          return {
            budgetID: index.budgetID,
            categoryName: index.categoryName,
            isDeleted: index.isDeleted,
            budget: index.budget,
            budgetValue: index.budgetValue,
            BudgetDataHandlerList: index.budgetDataDetails

          }
        })
        this.newData.forEach(x => {
          var storeValue = this.budgetDataDetailsList.filter(y => y.budgetID == x.budgetID);
          if(storeValue.length !=0){
          storeValue.forEach(z => {
            total = Number(total + z.amount);
          });
        }
        else{
          x.budgetValue ='';
        }
          if (Number(x.budget) < total){
            x.budgetValue = total.toString();
          }
          total=0;
        });


        console.log(this.total);
      })
  }



  Edit(id: any) {
    var details: any = this.newData.filter(x => x.budgetID == id);
    this.budgets.categoryName = details[0].categoryName;
    this.budgets.budget = details[0].budget;
    this.budgets.budgetID = id;
    this.cindex = this.budgets.budgetID
    $('#exampleModal1').modal('show');

  }


  EditBudgetData(id: any) {
    var budgetdatadetails: any = this.budgetDataDetailsList.filter(x => x.budgetDataID == id);
    this.budgetData.amount = budgetdatadetails[0].amount;
    this.budgetData.fileName = budgetdatadetails[0].fileName;
    this.budgetData.description = budgetdatadetails[0].description;
    this.budgetData.budgetDataID = id;
    this.cindex = this.budgets.budgetID
    $('#exampleModal12').modal('show');

  }


  deleteBudgetData(id: any) {
    this.service.deleteBudgetData(id).subscribe((res: any) => {
      if (res)
      this.getBudget();
        this.getDataBudget();
       
    })
  }

  delete(id: any) {
    this.service.deleteBudget(id).subscribe((res) => {
      if (res) {
        this.getBudget();
      }
    })
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // let fileToUpload = <File>files[0];

    if (file) {

      //this.budgetData.fileName = file.name;
      const formData = new FormData();
      formData.append('file', file);
      this.budgetData.file = formData;
      
      this.http.post("http://10.0.2.85/BudgetDemo/api/UploadFile", formData).subscribe(
        (res: any) => {
          this.budgetData.fileName = res.fileName
        })
    }
     
    console.log(this.budgetData.fileName);

  }

  downloadUploadFile(fileName: any) {
    this.service.download(fileName).subscribe((res: Blob) => {
      this.downloadFiles(res)
      console.log(res);

    },
      (error: HttpErrorResponse) => {
        alert("Server error while downloading file.");
      }
    )
  }

  downloadFiles(data: any) {
    const url = window.URL.createObjectURL(data);
    window.open(url);
  } 


  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    link.click();
    link.remove();
  }

  uploadFinished = (event: any) => {
    this.response = event;
  }

  onCreate = () => {
    var temp3 = {
      budget: this.des.budgetNumber,
      categoryName: this.des.desc,
      fileName: this.response.dbPath
    }
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44393/${serverPath}`;
  }


  onSaveBudgetData(form: NgForm) {
    if (!this.budgetData.budgetDataID && this.budgetData.budgetDataID == "") {
      var temp1 = {
        budgetDataID: 0,
        amount: this.budgetData.amount,
        description: this.budgetData.description,
        fileName: this.budgetData.fileName,
        isDeleted: this.budgetData.isDeleted,
        budgetID: this.temp_budgetID
      }
      this.service.addBudgetData(temp1)
        .subscribe((data: any) => {
          if (data.Succeeded == true) {
            alert("fail");
          }
          else {
            var storeValue = this.newData.findIndex(x => x.budgetID == temp1.budgetID);
            if (this.newData[storeValue].budget < temp1.amount) {;
              this.newData[storeValue].budget = this.newData[storeValue].budget + '/' + temp1.amount;
            };

            this.toastr.success('Message sent');
            this.fileTypeEmpty.nativeElement.value = '';
            temp1.fileName=''
            this.budgetData.budgetDataID = '';
            temp1.amount = '';
            this.budgetData.description = '';
            this.budgetData.fileName = '';
            this.budgetData.amount = '';
            this.getDataBudget();
            form.reset();
          }
        });
      // }
    }
    else {
      this.updateBudgetData.amount = this.budgetData.amount;
      this.updateBudgetData.budgetDataID = this.budgetData.budgetDataID;
      this.updateBudgetData.description = this.budgetData.description;
      this.updateBudgetData.fileName = this.budgetData.fileName;

      this.service.updateDataBudget(this.updateBudgetData.budgetDataID, this.updateBudgetData).subscribe(() => {
        this.budgetData.budgetDataID = '';
        this.budgetData.description = '';
        this.budgetData.fileName = '';
        this.budgetData.amount = '';
        this.getDataBudget();
      })

    }
  }

  getDataBudget() {
    var id: any;
    this.service.getBudgetDataList()
      .subscribe(res => {
        this.budgetDataDetailsList = res
        this.getBudget();
        //this.isVisible = false
      });
  }

onClose(){
  this.budgets.categoryName ='';
  this.budgets.budget ='';
}

previewFile(fileName: any) {
  this.fileNameForTitle = fileName;
  this.fileNameForPreview= '';
  this.service.download(fileName).subscribe((res:Blob) => {
    let url = window.URL.createObjectURL(res);
    
    this.fileURL =url;
    this.modalservice.open(this.popupview,{size:'lg'});
    if (fileName.includes(CommunicationLogConstants.extPdf)) {
      this.fileNameForPreview = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileURL);
    }
    if (fileName.includes(CommunicationLogConstants.extPng)
      || fileName.includes(CommunicationLogConstants.extJpeg)
      || fileName.includes(CommunicationLogConstants.extJpg)
      || fileName.includes(CommunicationLogConstants.extGif)
      || fileName.includes(CommunicationLogConstants.extBmp)) {
      this.fileNameForPreview = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileURL);
    }
    if (fileName.includes(CommunicationLogConstants.extXls) || fileName.includes(CommunicationLogConstants.extDoc)) {
      this.fileNameForPreview = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/gview?url=' + this.fileURL + '&embedded=true');
    }
})
}


onCloseClick(){
this.budgetData.description='';
this.budgetData.amount="";
}

}
