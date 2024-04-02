package com.vation.headless.core.models.stackbanner;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.apache.sling.api.resource.Resource;

import java.util.List;

public interface StackBannerModel {

    List<Resource> getBanner();


}
