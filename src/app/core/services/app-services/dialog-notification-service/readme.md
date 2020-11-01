#### Dialog Notification Service

- Import DialogNotificationModule vào root module (app module)

- Import DialogNotificationService vào component cần sử dụng

```sh
import { DialogNotificationService } from 'path/to/service';
```

- Inject vào component constructor

```sh
constructor(
  private dialogNotification: DialogNotificationService,
  ...
) {}
```

#### Model

    DialogDataModel = {
      title: string; // Title of dialog
      message: string; // Message show in dialog
      buttons: [{
      // action button list show in footer of dialog:
      // (optional: default: [{ text: 'OK', acticonValue: true }])
        text: string, // Button text
        actionValue: string  // Value return when use click button
      }]
    }

#### Functions

```sh
confirm(params: DialogDataModel): Observable<any>
- Open dialog with confirm type
```

```sh
info(params: DialogDataModel): Observable<any>
- Open dialog with info type
```

```sh
success(params: DialogDataModel): Observable<any>
- Open dialog with success type
```

```sh
error(params: DialogDataModel): Observable<any>
- Open dialog with error type
```

```sh
warning(params: DialogDataModel): Observable<any>
- Open dialog with warning type
```

```sh
info(params: DialogDataModel): Observable<any>
- Open dialog with info type
```

#### Open and recive action value

```sh
const param = {
  title: 'string',
  message: 'string',
  buttons: [
    { text: 'OK', actionValue: 1 },
    { text: 'NO', actionValue: 2 }
  ]
};
  this.dialogService.warning(param).subscribe(res => {
    // handle action value from user
  });
```
