#### Spinner Service

- Import SpinnerModule vào root module (app module)

- Add app-spinner vào file html của root component (main component || app component)

```sh
/* Main component html code */
<div>
    <router-outlet></router-outlet>
</div>
/* End main component html code */
<app-spinner class="undisplayed"></app-spinner>
```

- Import SpinnerService vào component cần sử dụng

```sh
import { SpinnerService } from 'path/to/service';
```

- Inject vào component constructor

```sh
constructor(
  private spinner: SpinnerService,
  ...
) {}
```

#### Functions

```sh
show(): void
- Show spinner
```

```sh
hide(): void
- Hide spinner
```
