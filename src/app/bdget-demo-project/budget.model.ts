export class Budget {
  budgetID!: string;
  categoryName!: string;
  budget!: string;
  budgetValue!:string;
  isDeleted!:boolean;
  BudgetDataHandlerList : BudgetData[] = [];

}

export class Desc{
  budgetNumber!:string;
  desc!:string;
  fileName!: any;

}


export class BudgetData{
  budgetDataID!: string;
  description!: string;
  amount!: string;
  file!:FormData;
  fileName!:string;
  budgetID!:string;
  isDeleted!:boolean;
  catName!:string;
  budget!:any;
  budgetDataValue!:string
}

export class Documents{
  file!:FormData;
  //fileName!:string;
}

export class UpdateBudgetData {
  description!: string;
  amount!: string;
  fileName!:string;
  budgetDataID!: string;
}

export class CommunicationLogConstants {
  public static uploadFolderName = "communicationlog";
  public static dateTimeFormat = "hh:mm a MMM d, y";
  public static timezone = '+0000';
  public static ValidInputForContent = /[~`$\^()\\[\]\\;{}|\:<>]/g;
  public static CompressImageHeightWidth = 150;
  public static EmbeddedTrue = '&embedded=true';
  public static MaxFileCount = 50;

  // mime type constants
  public static applicationPdf = 'application/pdf';
  public static applicationVndMsExcel = 'application/vnd.ms-excel';
  public static applicationExcel = 'application/excel';
  public static applicationXExcel = 'application/x-excel';
  public static applicationXMSExcel = 'application/x-msexcel';
  public static applicationMsWord = 'application/msword';
  public static applicationDoc = 'application/doc';
  public static applicationMsDoc = 'application/ms-doc';
  public static applicationOpenXmlSheet = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  public static applicationOpenXmlDocument = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  public static applicationImage = 'image';
  public static applicationAudioMpeg = 'audio/mpeg';
  public static applicationVideoMp4 = 'video/mp4';

  public static GoogleDocGViewUrl = 'https://docs.google.com/gview?url=';
  public static ViewOfficeAppsUrl = 'https://view.officeapps.live.com/op/embed.aspx?src=';
  public static GoogleDocGViewerUrl = 'https://docs.google.com/viewer?url=';

  // document and multimedia formats
  public static msOfficeDocumentFormats = ['application/vnd.ms-excel', 'application/excel', 'application/x-excel', 'application/x-msexcel', 'application/msword', 'application/doc', 'application/ms-doc', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  public static audioFormats = ['audio/mp3', 'audio/mpeg', 'audio/mp4', 'audio/aac', 'audio/midi', 'audio/x-midi', 'audio/ogg', 'audio/wav', 'audio/webm'];
  public static videoFormats = ['video/x-msvideo', 'video/mp4', 'video/mpeg', 'video/ogg', 'video/mp2t', 'video/webm', 'video/3gpp', 'video/3gpp2'];
  public static imageFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/bmp', 'image/gif'];
  public static orderimageFormat = ['application/doc', 'application/ms-doc','image/jpg', 'image/jpeg', 'image/png', 'image/bmp', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/heic', 'image/heif']

  // extensions
  public static documentExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx'];
  public static multimediaExtensions = ['.mp3', '.mp4'];
  public static imageExtensions = ['.png', '.jpeg', '.jpg', '.gif', '.bmp'];
  public static whatsAppFileExtensions = ['.png', '.jpeg', '.jpg', '.mp3', '.mp4', '.pdf'];
  public static OrderDocumentExtensions = ['.pdf', '.doc', '.docx', '.png', '.jpeg', '.jpg', '.bmp', '.heic', '.xls', '.xlsx'];
  public static outlookExtensions = ['.msg', '.eml'];

  // image extensions
  public static extPdf = ".pdf";
  public static extPng = ".png";
  public static extJpeg = ".jpeg";
  public static extJpg = ".jpg";
  public static extGif = ".gif";
  public static extBmp = ".bmp";
  public static extHeic = ".heic";

  // document extensions
  public static extXls = ".xls";
  public static extDoc = ".doc";
  public static extDocx = '.docx';
  public static extXlsx = '.xlsx';

  // audio/video extensions
  public static extMpeg = ".mpeg";
  public static extMp3 = ".mp3";
  public static extMp4 = ".mp4";
  public static extAac = ".aac";
  public static extWebm = ".webm";
  public static ext3gpp = ".3gpp";
  public static extOgg = ".ogg";
  public static extAmr = ".amr";
  public static extMsg = ".msg";
  public static extEml = ".eml";

  // WhatsApp from mobile number
  public static County = "Country";
  public static FromWhatsAppNo = "FromWhatsAppNo";

  // Vaild file size
  public static fileSize = 1024;
  public static maxfileSize = 5000;
  public static maxAllFileSize = 25000;
  public static orderMaxFileSize = 10000;
  public static orderMaxAllFileSize = 50000;

  public static dateFormat = "yyyy-MM-ddTHH:mm:ss.SSS";
  public static dateRegion = "en-US";
  public static whatsapptimeformat = 'hh:mm a';
  public static whatsappyearformat = 'MMMM d, yyyy';

  //Document Name with Guid
  // public static CustomerQuote = "891BACBF-BA63-4CCB-BE03-53882A7BEBF6";
  // public static VehicleInvoice = "77FB2217-1A6D-4491-AE94-7DE330BBC61A";
  // public static SignedContract = "393C363B-3D21-456D-B653-CEFFEB677C5C";
  // public static DeliveryNotes = "70B4D35A-2D34-4826-8655-E220F401BB3D";
  // public static DealerOrderForm = "20AAF8BB-E279-41F2-9545-DACED6319562";
  // public static AFRLDocument = "3FCB29E8-9894-4D70-AA0F-BD4D9284E057";

  public static CustomerQuote = "OM000";
  public static VehicleInvoice = "OM001";
  //public static SignedContract = "OM003";
  public static DirectorGuarantee = "OM003";
  public static DeliveryNotes = "OM005";
  public static DealerOrderForm = "OM004";
  public static CreditAcceptanceForm = "OM021";
  public static AFRLDocument = "OM002";
  public static HPIClearanceDocument = "OM025";
  public static FinanceClearanceDocument = "OM026";
  public static GeneratedOTRBreakdown = "OM013";
  //Document Upload functionality
  public static DeliveryNotesDocID = '1';
  public static VehicleInvoiceDocID = '2';
  public static AFRLDocumentDocID = '3';
  public static HPIClearanceDocID = '4';
  public static FinanceClearanceDocID = '5';
  public static AddInCoolingEndDate = 14;
}



