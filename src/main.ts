import { register } from 'swiper/element/bundle';

register();
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App,
{
  ...appConfig,
   providers: [
    ...appConfig.providers ?? [],
   provideCharts(withDefaultRegisterables()),
   provideHttpClient()
  ]
}
)
  .catch((err) => console.error(err));
