package com.ecommerce.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI ecommerceOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Nexo E-commerce API")
                        .version("0.1.0")
                        .description(
                                "API REST do e-commerce Nexo. Etapa 1: apenas health. "
                                        + "Autenticação JWT e recursos de negócio entram nas próximas etapas."
                        ));
    }
}
