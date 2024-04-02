package com.vation.headless.core.models.stackbanner.impl;

import static com.adobe.cq.export.json.ExporterConstants.SLING_MODEL_EXPORTER_NAME;
import static com.adobe.cq.export.json.ExporterConstants.SLING_MODEL_EXTENSION;


import com.vation.headless.core.models.stackbanner.StackBannerModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;


import java.util.List;

@Model(
        adaptables = {Resource.class, SlingHttpServletRequest.class},
        adapters = StackBannerModel.class,
        resourceType = StackBannerModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
        name = SLING_MODEL_EXPORTER_NAME,
        extensions = SLING_MODEL_EXTENSION
)
public class StackBannerModelImpl implements StackBannerModel {

    @ChildResource
    private List<Resource> carouselSlides;


    public static final String RESOURCE_TYPE = "vation-headless/components/stackbanner";

    @Override
    public List<Resource> getBanner() {
        return carouselSlides;
    }
}
